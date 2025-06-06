import assert from "node:assert";

import type {StructMemoryAlignment} from "../struct";
import {Table} from "../table";
import {nwkSecMaterialDescriptorEntry} from "./nwk-sec-material-descriptor-entry";

/**
 * Creates a network security material table.
 *
 * @param data Data to initialize table with.
 * @param alignment Memory alignment of initialization data.
 */
export const nwkSecMaterialDescriptorTable = (dataOrCapacity?: Buffer | Buffer[] | number, alignment: StructMemoryAlignment = "unaligned") => {
    const table = Table.new<ReturnType<typeof nwkSecMaterialDescriptorEntry>>()
        .struct(nwkSecMaterialDescriptorEntry)
        .occupancy((e) => e.isSet() as boolean);
    assert(dataOrCapacity !== undefined, "dataOrCapacity cannot be undefined");
    return typeof dataOrCapacity === "number" ? table.build(dataOrCapacity) : table.build(dataOrCapacity, alignment);
};
