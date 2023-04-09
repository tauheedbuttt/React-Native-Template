import React from 'react'
import { View, Text, Modal, ScrollView } from 'react-native'
import RadioButtonRN from 'radio-buttons-react-native';
import { colors, styles } from '../config/styles'
import SubmitButton from './SubmitButton';

interface RadioOptions {
    title?: string,
    visible: boolean,
    selected: object,
    sort?: boolean,
    data: [],
    onApply?: () => {},
    onCancel: () => {},
    setSelected: (value: object) => {},
}

const RadioOptions = ({ title, visible, data, onApply, onCancel, selected, setSelected, sort }: RadioOptions) => {
    const orderOptions = !sort ? null :
        [
            { id: 1, label: 'Ascending', value: 'asc' },
            { id: 2, label: 'Descending', value: 'desc' },
        ]
    return !data ? null : (
        <Modal
            transparent={true}
            onRequestClose={onCancel}
            animationType={'fade'}
            visible={visible}
        >
            <View style={styles.diaglogContainerStyle}>
                <View style={styles.dialogStyle}>
                    <Text style={{ ...styles.h3, marginBottom: 10 }}>{title}</Text>
                    <ScrollView style={{ maxHeight: 250, marginBottom: 30 }} >
                        <View>
                            <RadioButtonRN
                                data={data}
                                initial={data?.map(item => item.id).indexOf(selected?.id) + 1}
                                selectedBtn={(e: object) => {
                                    const order = sort ? selected.order : null;
                                    setSelected({ ...e, order });
                                }}
                                activeColor={colors.primary}
                                textColor={colors.primaryText}
                                textStyle={styles.email}
                                box={false}
                            />
                        </View>
                        {
                            !sort || !orderOptions ? null :
                                <View style={{ borderTopWidth: 1, borderColor: colors.border, marginTop: 20 }}>
                                    <RadioButtonRN
                                        data={orderOptions}
                                        initial={1}
                                        selectedBtn={(e: object) => {
                                            setSelected({ ...selected, order: e });
                                        }}
                                        activeColor={colors.primary}
                                        textColor={colors.primaryText}
                                        textStyle={styles.email}
                                        box={false}
                                    />
                                </View>
                        }
                    </ScrollView>
                    {
                        !selected?.id || !selected?.order ? null :
                            <SubmitButton
                                title={'Apply'}
                                onPress={onApply}
                            />
                    }
                    <SubmitButton
                        title={'Back'}
                        onPress={onCancel}
                        type={'secondary'}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default RadioOptions