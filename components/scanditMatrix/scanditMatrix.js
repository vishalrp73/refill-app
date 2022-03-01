import React, { useRef, useState, useEffect } from 'react';
import { requestCameraPermissionsIfNeeded } from '../../handlers/camera-permission-handler';
import { AppState, BackHandler, Text } from 'react-native';

import {
    BarcodeTracking,
    BarcodeTrackingBasicOverlay,
    BarcodeTrackingBasicOverlayStyle,
    BarcodeTrackingSettings,
    Symbology,
} from 'scandit-react-native-datacapture-barcode';

import {
    Camera, 
    DataCaptureContext,
    DataCaptureView,
    FrameSourceState,
    VideoResolution,
    RectangularViewfinder,
    RectangularViewfinderStyle,
    RectangularViewfinderLineStyle
} from 'scandit-react-native-datacapture-core';

const ScanditMatrix = () => {

    const licenseKey = 'AcBRgBaMNwwhNVFAAQS6C6oR2srWEvYSg0+vIFEqIojxfwt9px3MQlNUwqosXVRL2U6kmrZyo/kLHss+uWfmG21u+0UccNYXdz0Ze5F9FIgpVHRoTEokoNtd4GKkW1GPSGe4AmgjPMw4YDUkGgSqSTIXUpg7FNsZ1ylGIBoHbm65Aa2Fw7s/MuECldzW6oJtgLj16l3FxJ/4BdMoMXFq/YdbdtsZPhP1sIthvjocyCGWVB2KewBKdNEum7KdEoZ+d/FFf43DKwcPmryjosDXB9j2mAax5YPZwG9maFtMugs1HUQqgC2bjcPoIRhvtILQ8r3T/BsVmgUk7IjyE8MaP/XrQbOMV0zJxD6nn2yieDbMAsdCOCnWUdBCyQe2fIJP2Spd492qb7AxfJfUKKOVPfMPlLpePpeZhGTo9PCbqGv71Npqw3r5wF4fCY9dxSOVnnCanPzYa3cLI5ABalHk8v0kQ8g2Q2+VNgoFwff9HgzXxwFE2QuUY3q5fYzIXo5op79akqr/4J0/Ydzve00RJidog4f9XsWkXiBy6tFIjAFr1zOokVSio5Cvvyk7i6EYXskfhCApRoGjc+MXorAw/IkcmvJ13IZJfB2HsO2ftwU8pVNOmgfiqjpJ23rHghm0/+PGQvgtWfbR+tg3hxvdkgnM/v1pwAk7eDNAieT+yDJSgyUVJ2vpv8o1kOOXNuVAGyweqEOWfCN6noK5xX4L9sPx3CyiqhI7nNMIoKq/XwX1yTGp++OR9+/mZyfDmbF02y3vzglk8o9LOHTWUMaz96r4E2zpbm9iICQTPOPL/yYoZo+Agqa1TyA/0SWGhkEusuK3cJcBTcuKX9boLaI='
    const viewRef = useRef(null);
    const context = DataCaptureContext.forLicenseKey(licenseKey);
    const camera = Camera.default;
    const results = {};

    const setupScan = () => {
        const settings = new BarcodeTrackingSettings();
        settings.enableSymbologies([
            Symbology.EAN13UPCA,
            Symbology.EAN8,
            Symbology.UPCE,
            Symbology.Code39,
            Symbology.Code128,
            Symbology.QR,
          ]);

          const barcodeTracking = BarcodeTracking.forContext(context, settings);

          const listener = {
              didUpdateSession: (_, session) => {
                  Object.values(session.trackedBarcodes).forEach(trackedBarcode => {
                        const { data, symbology } = trackedBarcode.barcode;
                        results[data] = { data, symbology };
                  });
              }
          };
          barcodeTracking.addListener(listener);

    }

    const startCamera = () => {
        if (!camera) {
            context.setFrameSource(camera);
            const cameraSettings = BarcodeTracking.recommendedCameraSettings;
            cameraSettings.preferredResolution = VideoResolution.UHD4K;
            camera.applySettings(cameraSettings);
        }

        requestCameraPermissionsIfNeeded()
            .then (() => camera.switchToDesiredState(FrameSourceState.On))
            .catch (() => BackHandler.exitApp());
    }

    const stopCamera = () => {
        if (camera) {
            camera.switchToDesiredState(FrameSourceState.Off);
        }
    }

    const startCapture = () => {
        startCamera();
        barcodeTracking.isEnabled = true;
    }

    const stopCapture = () => {
        stopCamera();
        barcodeTracking.isEnabled = false;
    }

    const handleAppStateChange = async (nextAppState) => {
        if (nextAppState.match(/inactive|background/)) {
            stopCapture();
        } else {
            startCapture();
        }
    }

    useEffect(() => {
        AppState.addEventListener('change', handleAppStateChange);
        setupScan();


        return function cleanup() {
            AppState.removeEventListener('change', handleAppStateChange)
            context.dispose();
        }
    }, [])

    return (
        <>
            <DataCaptureView style = {{flex: 1}} context = {context} ref = {viewRef} />
        </>
    )

}

export default ScanditMatrix;