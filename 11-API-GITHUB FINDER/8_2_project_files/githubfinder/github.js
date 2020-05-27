class Github {
	constructor() {
		this.client_id = '0ab52338111bf531d0d3';
		this.client_secret = '7248734b9816f11c75b2e3b37b0da80ea7eef3fe';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();

		return {
			profile
		};
	}
}
