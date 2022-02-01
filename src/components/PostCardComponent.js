import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {IconSvgPlus} from '../assets/icons/IconSvgPlus';
import {HistoryData} from '../store/HistoryData';

export const PostCardComponent = ({user}) => {
    return(
        <View style={styles.Container}>
            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <Image style={styles.avatar}
                           source={{uri: user.avatar}}/>
                    <Text style={styles.avatarName}>{user.name}</Text>
                </View>

                <TouchableOpacity>
                    <Text style={styles.ThreeDots}>...</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.photo}
                       source={{uri: user.avatar}}/>
            </View>

            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <TouchableOpacity style={{marginLeft: 5}}>
                        <Text style={styles.ThreeDots}>...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 5}}>
                        <Text style={styles.ThreeDots}>...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 5}}>
                        <Text style={styles.ThreeDots}>...</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.flexRow}>
                    <TouchableOpacity>
                        <Text style={styles.ThreeDots}>...</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginLeft: 20, marginBottom:10}}>
                <Text style={{color:'#000',fontSize:18,fontWeight:'700'}}>100 Likes</Text>
            </View>

            <View style={styles.postBottomContainer}>
                <View style={styles.postBottomTextContainer}>
                    <Text style={styles.postBottomText} numberOfLines={2}>
                        Lorem ipsum dolor sit amet, quisquam similique vitae! Adipisci, alias animi cum et nihil quae tempore temporibus vitae!
                    </Text>
                </View>
                <View style={styles.topContainer}>
                    <View style={styles.flexRow}>
                        <Image style={styles.bottomAvatar}
                               source={{uri: user.avatar}}/>
                        <Text style={styles.comments}>
                            Add Comments...
                        </Text>
                    </View>
                    <View style={styles.flexRow}>
                        <View style={{marginRight: 15}}>
                            <IconSvgPlus/>
                        </View>
                        <View style={{marginRight: 15}}>
                            <IconSvgPlus/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    Container: {
        borderTopWidth: 1,
        borderTopColor: '#d2d2d2',
        borderBottom: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#c4c4c4',
        marginBottom: 5,
        backgroundColor: '#ffffff'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40/2,
        marginRight: 5
    },
    avatarName: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 22,
    },
    ThreeDots: {
        color: '#000',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 22,
        marginRight: 15,
        marginTop: 13
    },
    imageContainer: {

    },
    photo: {
        width: '100%',
        height: 375
    },
    postBottomContainer: {

    },
    postBottomTextContainer: {
        textAlign: 'center',
        marginHorizontal: 10
    },
    postBottomText: {
        color: '#3b3a3a',
        fontSize: 15,
        marginBottom: 10,
        marginHorizontal: 10
    },
    bottomAvatar: {
        width: 40,
        height: 40,
        borderRadius: 40/2,
        marginRight: 10
    },
    comments: {
        color: '#939393',
        fontSize: 20,
        lineHeight: 30
    }
})

