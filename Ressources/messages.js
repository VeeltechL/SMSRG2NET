const defaultZeroTimeout =  {
  nom: 'timeout',
  type: 'time',
  default: 0
}
const defaultTHDistance = {
  nom: 'distance en mètres',
  type: 'distance',
  default: 200
}
const tphNumber = {
  nom: 'numéro de telephone',
  type: 'tph_num',
  default: null
}
const defaultTWChannel = {
  nom: 'chaîne',
  type: 'channel',
  default: null
}

export default messages = [
  {
    key: '0',
    nom: 'Awake/Asleep',
    sousMessages: [
      {
        key: '0',
        nom: 'Asleep',
        settings: defaultZeroTimeout
      },
      {
        key: '1',
        nom: 'Awake',
        settings: defaultZeroTimeout
      },
      {
        key: '2',
        nom: 'Auto sleep',
        settings: defaultZeroTimeout
      },
      {
        key: '3',
        nom: 'Sleep cancel',
        settings: null
      }
    ]
  },
  {
    key: '1',
    nom: 'Cinet',
    sousMessages: [
      {
        key: '0',
        nom: 'Cinet Fast',
        settings: defaultZeroTimeout
      },
      {
        key: '1',
        nom: 'Cinet Slow',
        settings: defaultZeroTimeout
      },
      {
        key: '2',
        nom: 'Cinet Off',
        settings: defaultZeroTimeout
      },
      {
        key: '3',
        nom: 'Cinet Cancel',
        settings: null
      }
    ]
  },
  {
    key: '2',
    nom: 'RF',
    sousMessages: [
      {
        key: '0',
        nom: 'RF OFF',
        settings: defaultZeroTimeout
      },
      {
        key: '1',
        nom: 'RF RX',
        settings: defaultZeroTimeout
      },
      {
        key: '2',
        nom: 'RF Spice',
        settings: defaultZeroTimeout
      },
      {
        key: '3',
        nom: 'RF Cancel',
        settings: null
      }
    ]
  },
  {
    key: '3',
    nom: 'Mute',
    sousMessages: [
      {
        key: '0',
        nom: 'Mute',
        settings: defaultZeroTimeout
      }
    ]
  },
  {
    key: '4',
    nom: 'Statut',
    sousMessages: [
      {
        key: '0',
        nom: 'GSM',
        settings: null
      },
      {
        key: '1',
        nom: 'Mode',
        settings: null
      },
      {
        key: '2',
        nom: 'Position',
        settings: null
      },
      {
        key: '3',
        nom: 'Status',
        settings: null
      }
    ]
  },
  {
    key: '5',
    nom: 'Alerte',
    sousMessages: [
      {
        key: '0',
        nom: 'Temporary zone',
        settings: defaultTHDistance
      },
      {
        key: '1',
        nom: 'Temporary zone cancel',
        settings: null
      },
      {
        key: '2',
        nom: 'Tamper enable',
        settings: null
      },
      {
        key: '3',
        nom: 'Tamper enable',
        settings: null
      },
      {
        key: '4',
        nom: 'Tamper disable',
        settings: null
      },
      {
        key: '5',
        nom: 'Sub alerts',
        settings: tphNumber
      },
      {
        key: '6',
        nom: 'Sub track',
        settings: tphNumber
      },
      {
        key: '7',
        nom: 'Sub cancel',
        settings: null
      },
      {
        key: '8',
        nom: 'Clear alerts',
        settings: null
      },
      {
        key: '9',
        nom: 'Unsub',
        settings: tphNumber
      }
    ]
  },
  {
    key: '6',
    nom: 'SMS',
    sousMessages: [
      {
        key: '0',
        nom: 'SMS Rx Fast',
        settings: null
      },
      {
        key: '1',
        nom: 'SMS Rx Slow',
        settings: null
      },
      {
        key: '2',
        nom: 'SMS Track',
        settings: null
      },
      {
        key: '3',
        nom: 'SMS cancel',
        settings: null
      },
      {
        key: '4',
        nom: 'SMS off',
        settings: null
      }
    ]
  },
  {
    key: '7',
    nom: 'GPS',
    sousMessages: [
      {
        key: '0',
        nom: 'GPS Off',
        settings: defaultZeroTimeout
      },
      {
        key: '1',
        nom: 'GPS Always on',
        settings: defaultZeroTimeout
      },
      {
        key: '2',
        nom: 'GPS Always Off',
        settings: defaultZeroTimeout
      },
      {
        key: '3',
        nom: 'GPS auto refresh',
        settings: defaultZeroTimeout
      },
      {
        key: '4',
        nom: 'GPS Cancel',
        settings: null
      }
    ]
  },
  {
    key: '8',
    nom: 'Autres',
    sousMessages: [
      {
        key: '0',
        nom: 'D903',
        settings: null
      },
      {
        key: '1',
        nom: 'DF10',
        settings: null
      },
      {
        key: '2',
        nom: 'Cmd',
        settings: null
      },
      {
        key: '3',
        nom: 'Channel',
        settings: defaultTWChannel
      },
      {
        key: '4',
        nom: 'Output open',
        settings: null
      },
      {
        key: '5',
        nom: 'output close',
        settings: null
      },
      {
        key: '6',
        nom: 'output cancel',
        settings: null
      }
    ]
  },
  {
    key: '9',
    nom: 'Cancel all',
    sousMessages: [
      {
        key: '0',
        nom: 'Cancel all',
        settings: null
      }
    ]
  }
]
