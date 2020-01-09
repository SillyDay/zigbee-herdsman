const PARAM: {
    [s: string]: {
        [s: string]: number;
    };
} = {
    Network: {
        MAC: 0x01,
        PAN_ID: 0x05,
        NWK_ADDRESS: 0x07,
        EXT_PAN_ID: 0x08,
        CHANNEL_MASK: 0x0a,
        CHANNEL: 0x1c
    },
    FrameType: {
        ReadDeviceState: 0x07,
        ReadParameter: 0x0a,
        WriteParameter: 0x0b,
        ReadFirmwareVersion: 0x0d,
        DeviceStateChanged: 0x0e
    },
    APS: {
        DATA_CONFIRM: 0x04,
        DATA_REQUEST: 0x12,
        DATA_INDICATION: 0x17
    },
    NetworkState: {
        NET_OFFLINE: 0x00,
        NET_JOINING: 0x01,
        NET_CONNECTED: 0x02,
        NET_LEAVING: 0x03,
    }
}

interface Request {
    commandId?: number;
    parameterId?: number;
    parameter?: parameterT;
    request?: object;
    seqNumber?: number;
    resolve?: Function;
    reject?: Function;
    ts?: number;
}

interface ReceivedDataResponse {
    commandId?: number;
    seqNr?: number;
    status?: number;
    frameLength?: number;
    payloadLength?: number;
    deviceState?: number;
    destAddrMode?: number;
    destAddr16?: number;
    destAddr64?: string;
    destEndpoint?: number;
    srcAddrMode?: number;
    srcAddr16?: number;
    srcAddr64?: string;
    srcEndpoint?: number;
    profileId?: number;
    clusterId?: number;
    asduLength?: number;
    asduPayload?: number[];
    lqi?: number;
    rssi?: number;
}

interface ApsDataRequest {
    commandId?: number;
    seqNr?: number;
    frameLength?: number;
    payloadLength?: number;
    requestId?: number;
    flags?: number;
    destAddrMode?: number;
    destAddr16?: number;
    destAddr64?: number[];
    destEndpoint?: number;
    profileId?: number;
    clusterId?: number;
    srcEndpoint?: number;
    asduLength?: number;
    asduPayload?: number[];
    txOptions?: number;
    radius?: number;
}

type ParamMac = string;
type ParamPanId = number;
type ParamExtPanId = string;
type ParamNwkAddr = number;
type ParamChannel = number;
type ParamChannelMask = number;

type Command = ParamMac | ParamPanId | ParamNwkAddr | ParamExtPanId | ParamChannel |ParamChannelMask;
type parameterT = number | number[];

export { Request, ApsDataRequest, ReceivedDataResponse, parameterT , Command, ParamMac, ParamPanId, ParamNwkAddr, ParamExtPanId, ParamChannel, ParamChannelMask };

export default {PARAM};
