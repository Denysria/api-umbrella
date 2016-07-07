import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';

export default Ember.Component.extend({
  openModal: false,

  modalTitle: Ember.computed('model', function() {
    if(this.get('model.isNew')) {
      return 'Add Server';
    } else {
      return 'Edit Server';
    }
  }),

  bufferedModel: Ember.computed('model', function() {
    return BufferedProxy.create({ content: this.get('model') });
  }),

  actions: {
    open() {
      // For new servers, intelligently pick the default port based on the
      // backend protocol selected.
      if(this.get('bufferedModel') && !this.get('bufferedModel.port')) {
        if(this.get('apiBackendProtocol') === 'https') {
          this.set('bufferedModel.port', 443);
        } else {
          this.set('bufferedModel.port', 80);
        }
      }
    },

    submit() {
      this.get('bufferedModel').applyChanges();
      if(this.get('model.isNew')) {
        this.get('collection').pushObject(this.get('model'));
      }

      // After the first server is added, fill out a default value for the
      // "Backend Host" field based on the server's host (because in most
      // non-load balancing situations they will match).
      if(!this.get('apiBackendHost')) {
        let server = this.get('collection.firstObject');
        if(server && server.get('host')) {
          this.set('apiBackendHost', server.get('host'));
        }
      }

      this.set('openModal', false);
    },

    closed() {
      this.get('bufferedModel').discardChanges();
    },
  },
});
