/**
 * Emit a warning
 * @param m The warning message
 * @param name Warning type (name)
 */
export default async function (m: string, name: string) {
    // If API library user wants the output to be quiet, let it be.
    // @ts-ignore
    if (global.openwilma?.quiet)
        return;
    if (process == undefined || process.emitWarning == undefined) {
        // We are not running in Node.Js
        console.warn(name + ":", m)
    } else {
        // We are running in Node.Js
        process.emitWarning(m, name)
    }
}