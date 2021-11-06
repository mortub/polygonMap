const BING_KEY = "Av-0YttXt1zB9kvtd_DIdwKMyJnJaaUIHlAPHXqtoVpgZEme-sqpT3lRVUe8fSfh";

export let Microsoft;

export function loadBingApi() {
    const callbackName = "bingAPIReady";
    let url = `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}&key=${BING_KEY}`;
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = url;
        window.bingAPIReady = () => {
            Microsoft = window.Microsoft;
            resolve();
        };
        script.onerror = (error) => {
            reject(error);
        };
        document.body.appendChild(script);
    });
}
