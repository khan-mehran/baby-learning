import { useSyncExternalStore } from 'react';

/**
 * 'prompt'    – the browser can show its install dialog (Android, desktop Chrome/Edge)
 * 'ios'       – iPhone/iPad: no install dialog exists, the user adds it from the Share menu
 * 'installed' – already running as an installed app
 * 'none'      – this browser cannot install the app
 */
export type InstallState = 'prompt' | 'ios' | 'installed' | 'none';

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

let deferredPrompt: InstallPromptEvent | null = null;
let installed = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function isStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function isIOS() {
  return (
    /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
}

function getState(): InstallState {
  if (installed) return 'installed';
  if (deferredPrompt) return 'prompt';
  if (isIOS()) return 'ios';
  return 'none';
}

/** Call once at startup, before React renders, so the install event is never missed. */
export function setupPWA() {
  installed = isStandalone();

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as InstallPromptEvent;
    emit();
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    installed = true;
    emit();
  });

  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
}

export async function promptInstall() {
  if (!deferredPrompt) return;
  const event = deferredPrompt;
  await event.prompt();
  await event.userChoice;
  // A prompt event can only be used once.
  deferredPrompt = null;
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useInstallState(): InstallState {
  return useSyncExternalStore(subscribe, getState);
}
