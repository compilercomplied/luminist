abstract class Configuration {
  constructor() {}

  abstract validate(): void;
}

const PREFIX = "REACT_APP_";

// -----------------------------------------------------------------------------
class OAuthConfig extends Configuration {
  public readonly audience: string = "";
  public readonly appID: string = "";
  public readonly domain: string = "";
  public readonly scope: string = "";

  constructor() {
    super();
    this.appID = process.env[`${PREFIX}OAUTH_APP_ID`] ?? "";
    this.audience = process.env[`${PREFIX}OAUTH_AUDIENCE`] ?? "";
    this.domain = process.env[`${PREFIX}OAUTH_DOMAIN`] ?? "";
    this.scope = process.env[`${PREFIX}OAUTH_SCOPE`] ?? "";

    this.validate();
  }

  validate(): void {
    if (this.appID === "") {
      throw new Error(`Non-valid oauth app id: ${this.appID}`);
    }
    if (this.audience === "") {
      throw new Error(`Non-valid oauth audience: ${this.audience}`);
    }
    if (this.domain === "") {
      throw new Error(`Non-valid oauth domain: ${this.audience}`);
    }
    if (this.scope === "") {
      throw new Error(`Non-valid oauth scope: ${this.audience}`);
    }
  }
}

class APIConfig extends Configuration {
  public readonly baseURI: string = "";

  constructor() {
    super();
    this.baseURI = process.env[`${PREFIX}API_BASE_URI`] ?? "";

    this.validate();
  }

  validate(): void {
    if (this.baseURI === "") {
      throw new Error(`Non-valid API base URI: [${this.baseURI}]`);
    }
  }
}

// -----------------------------------------------------------------------------
export const OAuthOptions = new OAuthConfig();
export const APIOptions = new APIConfig();
