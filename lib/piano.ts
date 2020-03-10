import { Publisher } from "./publisher";

export * from "./interfaces/user";

export class Piano {
  private readonly apiToken: string;
  private readonly aid: string;

  public readonly sandbox: boolean;
  public readonly publisher: Publisher;

  constructor(apiToken: string, aid: string, sandbox?: boolean) {
    this.apiToken = apiToken;
    this.aid = aid;
    this.sandbox = !!sandbox;

    this.publisher = new Publisher(this);
  }

  public mergeParams(params: any) {
    return {
      api_token: this.apiToken,
      aid: this.aid,
      ...params
    };
  }
}
