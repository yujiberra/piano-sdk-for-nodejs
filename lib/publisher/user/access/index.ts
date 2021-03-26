import { Piano } from "../../../piano";
import { httpRequest } from "../../../utils/http-request";
import { Active } from "./active";
import { Access as IAccess } from "../../../interfaces/aceess";
import { PublisherUserAccessCheckParams } from "../../../interfaces/api-params";
import { PublisherUserAccessCheckResponse } from "../../../interfaces/api-response";

const ENDPOINT_PATH_PREFIX = "/publisher/user/access";

export class Access {
  private readonly piano: Piano;
  public readonly active: Active;

  constructor(piano: Piano) {
    this.piano = piano;
    this.active = new Active(piano);
  }

  /**
   * Check if user has access to a specific resource
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fuser~2Faccess~2Fcheck
   */
  public async check(params: PublisherUserAccessCheckParams): Promise<IAccess> {
    const apiResponse = (await httpRequest(
      "post",
      `${ENDPOINT_PATH_PREFIX}/check`,
      this.piano.mergeParams(params),
      this.piano.sandbox
    )) as PublisherUserAccessCheckResponse;

    return apiResponse.access;
  }
}