import { DataAccessLayer } from "@blockr/blockr-data-access";
import { BlockService } from "../services";

let blockService: BlockService;

beforeEach(() => {
    const dataAccessLayerMock = { } as DataAccessLayer;

    blockService = new BlockService(dataAccessLayerMock);
});

describe("getBlocksAsync", () => {
    it("", () => {
        blockService.getBlocksAsync();
    });
});




test("test", () => {
    expect("").toBe("");
});
