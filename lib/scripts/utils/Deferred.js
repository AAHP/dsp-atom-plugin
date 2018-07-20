class Deferred {
	constructor() {
		this.resolved = false;
		this.rejected = false;
		this.settled = false;
		this.promise = new Promise((resolve, reject) => {
			this.resolve = value => {
				this.resolved = true;
				this.settled = true;
				resolve(value);
			};

			this.reject = value => {
				this.rejected = true;
				this.settled = true;
				reject(value);
			};
		});
	}
}

module.exports = Deferred;
