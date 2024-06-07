import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { AppColor, AppSizes } from './src/Info/AppInfo'
import { DummyChat } from './src/Info/DummyChat'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const App = () => {

  // Hooks
  const {colors} = useTheme();

  // Chat Render
  const RenderChat = ({item}:any) => {

    return (
      <View style={{backgroundColor: colors.card, justifyContent: 'space-between', borderRadius: 12, paddingVertical: 15, paddingHorizontal: 18, alignItems: 'flex-start', flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10,}}>
          
          <View style={{width: 55, height: 55, position: 'relative', borderRadius: 52}}>
            <Image
              source={item.dp}
              style={{width: 55, height: 55, borderRadius: 52}}
            />
            <View style={{width: 15, height: 15, bottom: 0, right: 0, borderWidth: 3, borderColor: colors.card, position: 'absolute', backgroundColor: item.status == "offline" ? colors.border : AppColor.success, borderRadius: 52}}></View>
          </View>

          <View style={{gap: 2}}>
            <Text style={{color: colors.text, fontSize: 17, fontWeight: '500'}}>{item.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <IonIcon name='checkmark-done-outline' size={18} color={!item.read ? AppColor.success : colors.icon} />
              <Text style={{color: colors.text, fontSize: 15, opacity: 0.4 }}>{item.subtitle}</Text>
            </View>
          </View>

        </View>

        <View style={{alignItems: 'flex-end', gap: 5}}>
          <Text style={{color: colors.text, opacity: 0.4, fontSize: 15}}>09:10 AM</Text>
          {item.unread != 0 &&
            <View style={{backgroundColor: colors.primary, width: 25, justifyContent: 'center', alignItems: 'center', height: 25, borderRadius: 52}}>
              <Text style={{fontWeight: '600', color: 'white'}}>{item.unread}</Text>
            </View>
          }
        </View>

      </View>
    )

  }

  return (
    
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>

      <View style={{paddingHorizontal: AppSizes.horizontalPadding, gap: 20}}>

        {/* Search */}
        <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>

          <View style={{borderRadius: 5, height: 50, gap: 6, flexDirection: 'row', alignItems: 'center', paddingLeft: 13, width: '82%', backgroundColor: colors.card}}>
            <FeatherIcon name='search' size={25} color={colors.icon} />
            <Text style={{color: colors.text, fontSize: 16, fontWeight: '500', opacity: 0.4}}>Search message...</Text>
          </View>

          <View style={{borderRadius: 5, height: 50, width: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.card}}>
            <FeatherIcon name='edit' size={24} color={colors.icon} />
          </View>

        </View>

        {/* Chats */}
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={DummyChat}
          renderItem={({item}) => <RenderChat item={item} /> }
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            gap: 15
          }}
        />
        
      </View>


    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({})