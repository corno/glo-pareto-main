import * as pt from "pareto-core-types"

//import { ISetExitCodeToFailed, IWriteStream } from "../interfaces/interfaces.p"
import { TMainData } from "../types/types.p"

//

export type PProgramMain = pt.Procedure<TMainData
    // $i: {
    //     readonly "stdout": IWriteStream
    //     readonly "stderr": IWriteStream
    //     readonly "setExitCodeToFailed": ISetExitCodeToFailed
    // }
>
