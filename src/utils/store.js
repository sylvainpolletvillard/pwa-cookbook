export class Store {
	getter(key) { return this._map.get(key); }
	setter(key, val) { return this._map.set(key, val); }
	deleter(key) { return this._map.delete(key); }
	cleaner() { return this._map.clear(); }

	constructor(params) {
		this._map = new Map();
		this.expirationTimeInSeconds = Infinity;
		Object.assign(this, params);
	}

	has(key) {
		return this.get(key) != null;
	}

	get(key) {
		let data = this.getter(key);
		if (!data || !data.value) {
			return null;
		}
		if (data.timestamp && Date.now() > data.timestamp) {
			this.delete(key);
			return null;
		}
		return data.value;
	}

	set(key, value, expirationTimeInSeconds = this.expirationTimeInSeconds) {
		let timestamp = Date.now() + expirationTimeInSeconds * 1000;
		this.setter(key, { timestamp, value });
		self.sessionStorage.setItem(key, JSON.stringify({ timestamp, value }));
	}

	delete(key) {
		return this.deleter(key);
	}

	clear() {
		return this.cleaner();
	}

	put(key, value) {
		this.set(key, Object.assign({}, this.get(key), value));
	}
}

// sessionStore = sessionStorage, propre à un onglet
export const sessionStore = new Store({
	getter(key) { return JSON.parse(self.sessionStorage.getItem(key)); },
	setter(key, value) { return self.sessionStorage.setItem(key, JSON.stringify(value)); },
	deleter(key) { return self.sessionStorage.removeItem(key); },
	cleaner() { return self.sessionStorage.clear(); },
	keys: {
		SCROLL_POSITION: "scrollPos"
	},
	expirationTimeInSeconds: 60 * 60 // 1 heure par défaut
});

// localStore = localStorage, persistent sur le long terme
export const localStore = new Store({
	getter(key) { return JSON.parse(self.localStorage.getItem(key)); },
	setter(key, value) { return self.localStorage.setItem(key, JSON.stringify(value)); },
	deleter(key) { return self.localStorage.removeItem(key); },
	cleaner() { return self.localStorage.clear(); },
	keys: {
		PREF_LOCALE: "preferredLocale"
	},
	expirationTimeInSeconds: 60 * 60 * 24 * 365 // 1 an par défaut
});

// memoryStore = juste dans la RAM, effacé au rechargement de la page
export const memoryStore = new Store({ expirationTimeInSeconds: 60 * 60 * 24 * 365 });
