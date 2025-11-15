var APP_DATA = {
  "scenes": [
    {
      "id": "0-living1",
      "name": "Living1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6391382809972503,
        "pitch": 0.03320174781343965,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.587641197067966,
          "pitch": 0.01797679150967113,
          "rotation": 0,
          "target": "1-living2"
        },
        {
          "yaw": 1.2062709878718962,
          "pitch": 0.024689968217247227,
          "rotation": 0,
          "target": "4-masterbed"
        },
        {
          "yaw": 0.6935999113949265,
          "pitch": 0.0049522571297409,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living2",
      "name": "Living2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3838999242827512,
          "pitch": 0.029500200335291993,
          "rotation": 0,
          "target": "0-living1"
        },
        {
          "yaw": 1.8389929567045558,
          "pitch": 0.03223556301314545,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": 1.9962602904308513,
          "pitch": 0.03440229810431461,
          "rotation": 1.5707963267948966,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9471539003437819,
          "pitch": 0.09526425170525421,
          "rotation": 4.71238898038469,
          "target": "1-living2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.536735220241468,
          "pitch": 0.059770064037468984,
          "rotation": 0,
          "target": "1-living2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-masterbed",
      "name": "MasterBed",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8828500707716174,
          "pitch": -0.07655630945843583,
          "rotation": 0,
          "target": "0-living1"
        },
        {
          "yaw": 0.7997077239656214,
          "pitch": -0.012916987220666698,
          "rotation": 0,
          "target": "5-mastertoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-mastertoilet",
      "name": "MasterToilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8261049495463233,
          "pitch": 0.021222114078881305,
          "rotation": 4.71238898038469,
          "target": "4-masterbed"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
