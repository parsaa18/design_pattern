// Target
class StorageService {
  save() {}
  load() {}
}

// Adaptee
class LocalStorageAPI {
  setItem(key, value) {
    console.log(`Saving ${key} : ${value} to localStorage`);
    // localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    console.log(`Loading ${key} from localStorage`);
    return "dark"; // Simulating a loaded value
    // return JSON.parse(localStorage.getItem(key));
  }
}

// Adapter
class LocalStorageAdapter extends StorageService {
  constructor() {
    super();
    this.storage = new LocalStorageAPI();
  }

  save(key, value) {
    this.storage.setItem(key, value);
  }

  load(key) {
    return this.storage.getItem(key) || null;
  }
}

function manageSettings(storageService) {
  storageService.save("theme", "dark");
  console.log("Loaded theme:", storageService.load("theme"));
}

const storage = new LocalStorageAdapter();
manageSettings(storage);
