import { SpaceConnector } from "./SpaceConnector";

export class Space {
  spaceId: string;
  description: string;
  commands: string[];
  connections: SpaceConnector[];
}
