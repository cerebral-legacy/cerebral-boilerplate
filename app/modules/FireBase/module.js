import Firebase from 'firebase';
import value from './signals/value';

export default function (options) {
  const connections = {};

  return {
    init(controller, name) {

      // Create service
      controller.services[name] = {
        sync(collection, path) {
          const connection = connections[collection] = {
            ref: new Firebase(`${options.url}/${collection}`),
            listener(snapshot) {
              controller.signals[name].value({value: snapshot.val(), path});
            }
          };
          connection.ref.on('value', connection.listener);
        },
        stop(collection) {
          const connection = connections[collection];
          connection.ref.off('value', connection.listener);
        }
      };

    },
    value: value
  };
}
