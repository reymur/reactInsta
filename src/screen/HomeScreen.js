import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import {IconSvgLogo} from '../assets/icons/IconSvgLogo';
import {IconSvgPlus} from '../assets/icons/IconSvgPlus';
import {IconSvgHeart} from '../assets/icons/IconSvgHeart';
import {IconSvgMessage} from '../assets/icons/IconSvgMessage';
import {PostCardComponent} from '../components/PostCardComponent';
import {GetName} from '../helper/getName';
import {HistorySort} from '../helper/HistorySort';
import {HistoryData} from '../store/HistoryData';
import type {iHistory} from '../types/HistorytType';

export const HomeScreen = () => {
    return (
        <>
            <View style={styles.logoContainer}>
                <IconSvgLogo/>

                <View style={styles.IconsContainer}>
                    <TouchableOpacity style={{marginRight:0}}>
                        <IconSvgPlus/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginRight:0}}>
                        <IconSvgHeart/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginRight:0}}>
                        <IconSvgMessage/>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <ScrollView style={styles.history} horizontal={true} showsHorizontalScrollIndicator={false}>
                    { HistorySort.sortHistoryData(HistoryData).map((item: iHistory, index) => (
                        <View key={item.id} style={[styles.historyContainer, index === 0 && {marginLeft: 10}]}>
                            <TouchableOpacity  style={[styles.historyImageContainer, item.active ? styles.historyActive : styles.historyNotActive]}>
                                <Image style={styles.historyImage}
                                       source={{uri: item.avatar}}/>
                            </TouchableOpacity>

                            <Text style={styles.historyName}>
                                {GetName.getNames(item.name)}
                            </Text>
                        </View>
                    )) }
                </ScrollView>

                <View style={styles.postCardContainer}>
                    { [...Array(10)].map((name, index) => (
                        <PostCardComponent key={index}/>
                    ))}
                </View>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    IconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    history: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 2,
        marginVertical: 5
    },
    historyContainer: {
        alignItems: 'center'
    },
    historyImageContainer: {
        padding: 3,
        borderRadius: 50,
        borderWidth: 4,
        marginHorizontal: 6,
    },
    historyActive: {
        borderColor: '#ce0e5b',
    },
    historyNotActive: {
        borderColor: '#a1a1a1',
    },
    historyImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    historyName: {
        fontSize: 15,
        lineHeight: 22
    },
    postCardContainer: {
        marginBottom: 1,
        backgroundColor: '#e0e0e0'
    }
})
