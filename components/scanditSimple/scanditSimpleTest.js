import React, { useState, useRef, useEffect } from 'react';
import { Alert, AppState, BackHandler, SafeAreaView, View } from 'react-native';
import {
    BarcodeCapture,
    BarcodeCaptureOverlay,
    BarcodeCaptureOverlayStyle,
    BarcodeCaptureSettings,
    Symbology,
    SymbologyDescription
} from 'scandit-react-native-datacapture-barcode';
import {
    Camera,
    CameraSettings,
    DataCaptureContext,
    DataCaptureView,
    FrameSourceState,
    RectangularViewfinder,
    RectangularViewfinderStyle,
    RectangularViewfinderLineStyle,
    VideoResolution
} from 'scandit-react-native-datacapture-core';

import { requestCameraPermissionsIfNeeded } from '../../handlers/camera-permission-handler';

const ScanditSimpleTest = () => {

    const licenseKey = '';
    const context = DataCaptureContext.forLicenseKey(licenseKey);
    const viewRef = useRef(null);
    const camera = Camera.default;

    useEffect(() => {
        AppState.addEventListener('change', handleAppStateChange)
        setupScan();
        startCamera();

        return function cleanUp () {
            AppState.removeEventListener('change', handleAppStateChange)
            context.dispose();
        }
    }, [])

    const handleAppStateChange = async (nextAppState) => {
        if (nextAppState.match(/inactive|background/)) {
            stopCapture();
        } else {
            startCapture();
        }
    }

    const startCapture = () => {
        startCamera();
        barcodeCaptureMode.isEnabled = true;
    }

    const stopCapture = () => {
        barcodeCaptureMode.isEnabled = false;
        stopCamera();
    }

    const startCamera = () => {
        if (!camera) {
            camera = Camera.default;
            context.setFrameSource(camera);

            const cameraSettings = new CameraSettings();
            cameraSettings.preferredResolution = VideoResolution.UHD4K;
            camera.applySettings(cameraSettings);
        }
        requestCameraPermissionsIfNeeded()
            .then (() => camera.switchToDesiredState(FrameSourceState.On))
            .catch (() => BackHandler.exitApp());
    }

    const setupScan = () => {
        const settings = new BarcodeCaptureSettings();
        settings.enableSymbologies([
            Symbology.EAN13UPCA,
            Symbology.EAN8,
            Symbology.UPCE,
            Symbology.QR,
            Symbology.DataMatrix,
            Symbology.Code39,
            Symbology.Code128,
            Symbology.InterleavedTwoOfFive,
        ]);

        const symbologySettings = settings.settingsForSymbology(Symbology.Code39);
        symbologySettings.activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        const barcodeCaptureMode = BarcodeCapture.forContext(context, settings);

        const listener = {
            didScan: (_, session) => {
                const barcode = session.newlyRecognizedBarcodes[0];
                const symbology = new SymbologyDescription(barcode.symbology);
                barcodeCaptureMode.isEnabled = false;
                Alert.alert(
                    null,
                    `Scanned: ${barcode.data} (${symbology.readableName})`,
                    [{ text: 'OK', onPress: () => this.barcodeCaptureMode.isEnabled = true }],
                    { cancelable: false }
                );
            }
        };

        barcodeCaptureMode.addListener(listener);

        const overlay = BarcodeCaptureOverlay.withBarcodeCaptureForViewWithStyle(
            barcodeCaptureMode,
            viewRef.current,
            BarcodeCaptureOverlayStyle.Frame
        );
        overlay.viewfinder = new RectangularViewfinder(
            RectangularViewfinderStyle.Rounded,
            RectangularViewfinderLineStyle.Bold,
        );
        overlay;

    }

    

    return (
        < DataCaptureView style = {{flex:1}} context = {context} ref = {viewRef} />
    )


}

export default ScanditSimpleTest;