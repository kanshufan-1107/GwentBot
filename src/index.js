import CryptoJS from "crypto-js"
let timestamp = new Date().getTime()
let hash = CryptoJS.MD5('' + timestamp).toString()
log(hash)

let webview = ui.webview
let set = webview.getSettings()
set.setAllowFileAccessFromFileURLs(false)
set.setAllowUniversalAccessFromFileURLs(false)
set.setSupportZoom(false)
set.setJavaScriptEnabled(true)
webview.loadUrl('file:///storage/emulated/0/脚本/GwentBot/index.html')

var webcc = new JavaAdapter(WebChromeClient, {
    onJsPrompt: function (webView, url, fnName, defaultValue, jsPromptResult) {
        toast(fnName + ' ' + defaultValue)
        jsPromptResult.confirm()
        return true
    }
})
webview.setWebChromeClient(webcc)