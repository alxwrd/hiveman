import { writable } from "svelte/store";


export const localStorage = {
  get: (name, defaultValue) => {
    let result = JSON.parse(window.localStorage.getItem(name));
    return result ? result : defaultValue;
  },
  set: (name, value) => {
    window.localStorage.setItem(name, JSON.stringify(value));
  }
};


export const auth = writable(localStorage.get("auth") || {});


const authSubscription = auth.subscribe((value) => {
  localStorage.set("auth", value);
});


