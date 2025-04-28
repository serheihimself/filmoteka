export default function forceReloadOnHtmlChange() {
    return {
      name: 'force-reload-on-html-change',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.html')) {
          server.ws.send({
            type: 'full-reload',
          });
        }
      },
    };
  }
  