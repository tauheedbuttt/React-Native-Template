import { View, Text, TextInput, TouchableOpacity, ViewStyle, KeyboardTypeOptions, } from 'react-native'
import React, { useRef } from 'react'
import { SvgXml } from 'react-native-svg';

import { svgs } from '../config/svgs';
import { colors, styles } from '../config/styles';


interface ItemProps {
    data: ItemProps,
    label?: string,
    placeholder?: string,
    value: any

    isValid?: boolean,
    star?: boolean,
    show?: boolean,
    multiline?: boolean,
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined,

    icon?: JSX.Element | JSX.Element[],
    rightIcon?: JSX.Element | JSX.Element[],
    keyboardType?: KeyboardTypeOptions,

    onPress?: () => {},
    setValue: (data: any) => {},
    onSubmit?: () => {},
    setShow?: () => {},
}
interface FieldProps {
    data: [ItemProps],
    item: ItemProps,
    refs: [React.LegacyRef<TextInput> | undefined],
    index: number,
    style?: ViewStyle,
    total?: number
}
interface FormProps {
    fields: [FieldProps],
    style?: ViewStyle,
    fieldStyle: ViewStyle
}

const Field = ({ item, refs, index, style, total }: FieldProps) => {
    const isPassword = (item.label ? item.label : item.placeholder)?.toLowerCase().includes('password')
    const isValid = item.isValid != undefined && item.isValid == true;
    return (
        <View style={{ flex: 1 }}>
            {
                !item.label ? null :
                    <Text style={styles.formLabel}>
                        {item.star == undefined ? item.label : `${item.label}*`}
                    </Text>
            }
            <TouchableOpacity
                style={{ ...styles.formInputContainer, ...style }}
                disabled={!item.onPress}
                activeOpacity={0.7}
                onPress={item.onPress}
            >
                <View style={{ marginHorizontal: 5 }}>
                    {item.icon}
                </View>
                <TextInput
                    ref={refs[index]}
                    value={item.value}
                    onChangeText={item.setValue}
                    onSubmitEditing={() => {
                        if (item.onSubmit) item.onSubmit();
                        index + 1 != total
                            ? refs[index + 1].current.focus()
                            : null
                    }}
                    autoCapitalize={item.autoCapitalize ? item.autoCapitalize : undefined}
                    placeholder={item.placeholder}
                    placeholderTextColor={colors.border}
                    style={styles.formInput}
                    secureTextEntry={isPassword ? item.show : false}
                    keyboardType={item.keyboardType}
                    multiline={item.multiline}
                    editable={!item.onPress}
                />
                {
                    isPassword
                        ?
                        <TouchableOpacity onPress={item.setShow} activeOpacity={0.5}>
                            <SvgXml xml={item.show ? svgs.close_eye : svgs.open_eye} height={20} width={20} color={colors.primaryText} />
                        </TouchableOpacity>
                        :
                        item.value == '' || !item.value || item.onPress ? null :
                            <TouchableOpacity onPress={() => item?.setValue('')} style={{ padding: 5 }} activeOpacity={0.7}>
                                <SvgXml xml={svgs.close} color={'black'} width={10} height={10} />
                            </TouchableOpacity>
                }
                {item.rightIcon}
            </TouchableOpacity>
        </View>
    )
}

const Form = ({ fields, style, fieldStyle }: FormProps) => {
    const total = fields?.length + fields?.filter(item => item.data)?.length;
    const refs: React.LegacyRef<TextInput>[] = [];
    for (let i = 0; i < total; i++) refs.push(useRef());
    var i = 0;
    return (
        <View style={style}>
            {
                fields?.map((item, index) => {
                    return (
                        item.data
                            ? <View key={index} style={{ ...styles.row, justifyContent: 'space-between' }}>
                                {
                                    item?.data?.map((subItem, subIndex) => {
                                        const marginRight = subIndex == 0 ? { marginRight: 10 } : null;
                                        return <Field
                                            key={subIndex}
                                            index={i++}
                                            item={subItem}
                                            refs={refs}
                                            style={{ ...fieldStyle, ...marginRight }}
                                        // total={total}
                                        />
                                    })
                                }
                            </View>
                            :
                            <Field
                                key={index}
                                index={i++}
                                item={item}
                                refs={refs}
                                style={fieldStyle}
                                total={total}
                            />
                    )
                })
            }
        </View>
    )
}

export default Form