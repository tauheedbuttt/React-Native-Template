import { Alert } from "react-native";
import { reset } from "../navigation/RootNavigation";

export const randomString = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const getColor = (value_index) => {
    switch (value_index) {
        case 49: return '#000000';
        case 50: return '#1857f7';
        case 51: return '#945454';
        case 52: return '#8f8f8f';
        case 53: return '#53a828';
        case 54: return '#ce64d4';
        case 55: return '#fffaf1';
        case 56: return '#eb6703';
        case 57: return '#ef3dff';
        case 58: return '#ff0000';
        case 59: return '#fffaf1';
        case 60: return '#ffd500';
    }
}

export const getSize = (value_index) => {
    switch (value_index) {
        case 166: return 'XS';
        case 167: return 'S';
        case 168: return 'M';
        case 169: return 'L';
        case 170: return 'XL';
        case 175: return '32';
        case 176: return '34';
        case 177: return '35';
        case 178: return '36';
        default: return 'S';
    }
}

export const priceDetails = (item) => {
    const isDiscount = !!item?.price_info?.special_price;
    const final_price = parseFloat(item?.price_info?.final_price).toFixed(2);
    const special_price = item?.price_info?.special_price ? parseFloat(item?.price_info?.special_price).toFixed(2) : null;
    const price = isDiscount ? special_price : final_price;
    return { price, final_price, special_price, isDiscount };
}

export const validateEmail = email => {
    return RegExp('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}').test(email);
};

// TODO: Fix Validation of Telephone
export const validateTelephone = telephone => {
    return (`${telephone}`.length >= 3 && `${telephone}`.length <= 32);
};

export const validatePassword = password => {
    return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*.-_])[\w!@#$%^&*.-_]{8,}$/.test(
        password,
    );
};

export const validateInput = (fields) => {
    // Row Field and Simple Field Combine
    const rowFields = fields?.map(item => item.data).filter(item => item);
    var temp = []
    rowFields.forEach(element => {
        temp = [...temp, ...element]
    });

    const mixedFields = [
        ...temp,
        ...fields.filter(item => !item.data),
    ].filter(item => item);

    // Validate Inputs

    const errorMessages = mixedFields?.filter(item => (item.isValid != undefined && item.isValid == false))?.map(item => item.error);
    if (errorMessages?.length) {
        Alert.alert('Invalid Data', errorMessages.join('\n'))
        return true;
    }
}

export const getCurrentTime = (date) => {
    let today = new Date(date);
    const tempHours = (today.getHours() > 12 ? today.getHours() - 12 : today.getHours());
    let hours = (tempHours < 10 ? '0' : '') + tempHours;
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    return hours + ':' + minutes + (today.getHours() < 12 ? " AM" : " PM");
}
export const getCurrentDate = (date) => {
    let today = new Date();
    let passed = new Date(date);
    if (passed.getDate() == today.getDate()) {
        return 'Today';
    }
    return passed.toLocaleDateString();
}

export const validateNumericInputs = (phone) => {
    return !!/^[0-9]+$/.test(phone) || phone === ''
}
export const calculateDealTimeLeft = (date_on_sale_to_gmt) => {
    let difference = +new Date(date_on_sale_to_gmt) - +new Date();
    if (difference > 0) {
        return true
    }
    return false;
};

export function randomDate(start = new Date(2012, 0, 1), end = new Date(),) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const random = (max, min) => {
    return Math.floor(Math.random() * max) + min
}

export const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }, paddingToBottom = 20) => {
    return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
    );
};

export const error = (err, show = true) => {
    const isAxios = !!err.response;
    const axiosMessage = err.response?.data?.message;
    const axiosData = err.response?.data;
    const axiosResponse = err.response?._response;
    const message = !isAxios
        ? err
        : (
            !!axiosMessage
                ? axiosMessage
                : (axiosData ? axiosData : axiosResponse)
        );
    if (message.includes(`Unable to resolve host`)) {
        if (show) alert('Check your network and try again')
        return message;
    }
    if (show) alert(message);
    return message;
}