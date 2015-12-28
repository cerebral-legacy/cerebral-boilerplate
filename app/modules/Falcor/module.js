import falcor from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

export default function (options) {
  const falcorModel = new falcor.Model({
    source: new HttpDataSource(options.source)
  });

  return {
    init(controller, name) {

      // Create service
      controller.services[name] = {
        get(query) {
          return falcorModel.get(query).then(response => response.json)
        },
        call(path, data, attr) {
          return falcorModal.call(path, data, attr);
        }
      }

    }
  };
}
