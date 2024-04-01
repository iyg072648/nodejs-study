function alertMove(msg, path){
    let script = `
    <script type="text/javascript">
        alert("${msg}")
        location.herf="${path}"
    `
    return script
}

module.exports = {
    alertMove
}