export const params = function (image, color, density) {
    return {
        "particles": {
            "density": density,
            "color": color,
            "size": {
                "value": 2,
                "random": false
            },
            "movement": {
                "speed": 15,
                "restless": {
                    "enabled": true,
                    "value": 10
                }
            },
            "interactivity": {
                "on_hover": {
                    "enabled": true,
                    "action": "repulse"
                },
                "on_click": {
                    "enabled": true,
                    "action": "big_repulse"
                },
                "on_touch": {
                    "enabled": true,
                    "action": "repulse"
                }
            }
        },
        "image": {
            "src": {
                "path": image,
                "is_external": true
            },
            "size": {
                "canvas_pct": 70,
                "min_px": 150,
                "max_px": 800
            }
        },
        "interactions": {
            "repulse": {
                "distance": 100,
                "strength": 200
            },
            "big_repulse": {
                "distance": 100,
                "strength": 500
            },
            "grab": {
                "distance": 100,
                "line_width": 1
            }
        },
        "disabled": false
    }
}
