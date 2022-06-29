import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Slider from '@react-native-community/slider'
// import Swiper from 'react-native-swiper'
import { BgCard } from '../BottomTabs/HomePages/Home'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HrCommon } from '../Components/LineComponent'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { SelectTab } from '../Components/SliderComponents'
import {
  main,
  sample,
  sample1,
  sample2,
  sample3,
  sample4,
  darkBottom,
  sample5,
  darkTop,
  fire,
  jenny,
  whiteShadow,
  coin,
  logo,
} from '../../images'
import { styles, windowWidth, windowHeight } from '../../styles'
import { Circle } from '../Components/LineComponent'
import { MainButton } from '../Components/ButtonComponents'
import { useState } from 'react'
import { CardMain } from '../Components/CardComponents'
import Header from '../BottomTabs/Header'
import React from 'react'

const BookRead = ({ navigation, route }) => {
  const [openSettings, setOpenSettings] = useState(false)
  const [select, setSelect] = useState(1)
  const [darkMode, setDarkMode] = useState(false)
  const [size, setSize] = useState(1)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: !darkMode
          ? select === 1
            ? '#EEEEFE'
            : select === 0
            ? '#EAEAEA'
            : '#FDF6E4'
          : 'black',
      }}
    >
      <View
        style={{
          height: 80,
          width: '100%',
          backgroundColor: 'white',
          padding: 8,
          paddingTop: 30,
          flexDirection: 'row',
          paddingBottom: 4,
        }}
      >
        <Feather name="arrow-left-circle" size={33} style={{ top: 10 }} />
        <View
          style={{
            height: '100%',
            top: 9,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              textAlignVertical: 'center',
              fontWeight: 'bold',
              color: 'black',
              fontSize: 23,
            }}
          >
            True Love
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', top: 10 }}>
          <TouchableOpacity onPress={() => setOpenSettings(!openSettings)}>
            <MaterialCommunityIcons name="format-letter-case-upper" size={33} />
          </TouchableOpacity>
        </View>
      </View>
      <HrCommon />
      <View style={{ flex: 1 }}>
        {openSettings ? (
          <View
            style={{
              position: 'relative',
              padding: 15,
              backgroundColor: 'white',
              width: '100%',
            }}
          >
            <View style={{ flexDirection: 'row', height: 30 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#EAEAEA',
                  borderTopLeftRadius: 10,
                  borderWidth: select === 0 ? 1.5 : 0,
                  borderColor: '#FF92CD',
                  borderBottomLeftRadius: 10,
                  flex: 1,
                }}
                onPress={() => setSelect(0)}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#EEEEFE',
                  borderWidth: select === 1 ? 1.5 : 0,
                  borderColor: '#FF92CD',
                  flex: 1,
                }}
                onPress={() => setSelect(1)}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDF6E4',
                  borderWidth: select === 2 ? 1.5 : 0,
                  borderColor: '#FF92CD',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  flex: 1,
                }}
                onPress={() => setSelect(2)}
              />
            </View>
            <View style={{ width: '100%', marginTop: 13 }}>
              <CustomSlider
                onChange={(v) => setSize(1 * v)}
                value={size}
                icon={
                  <MaterialCommunityIcons
                    name="format-letter-case-upper"
                    size={25}
                  />
                }
              />
            </View>
          </View>
        ) : null}
        <ScrollView style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <Text
            style={{
              fontSize: 23 * size,
              fontWeight: 'bold',
              textShadowColor: 'rgba(0,0,0,0.3)',

              textShadowOffset: {
                width: 1,
                height: 3,
              },
              textShadowRadius: 2,
              marginBottom: 10,
              color: darkMode ? 'white' : 'black',
            }}
          >
            CHAPTER 1: ME
          </Text>
          <Text
            style={{
              marginBottom: 50,
              color: darkMode ? 'white' : 'black',
              fontFamily: 'Cambria',
              fontSize: 16 * size,
              letterSpacing: 1,
            }}
          >
            “Jung Hyung!!!” I hear my mom’s voice call from downstairs. I groan
            to myself and roll out of my tiny, yet comfortable bed. While neatly
            tucking the corners of my bed sheet into the ehadboard, It take my
            time because this is the last morning that I will be competing the
            task for months. “Jung Hyung!!!” She calls again. “I’m up!” I yell
            back. The cabinets open and close downstairs, the sounds of her
            frantically preparing breakfast. The knot in my stomach grows with
            each step to the bathroom, by the time I start the shower, it’s
            nearly unbearable. I spent the last few years nervously anticipating
            college. My weekends were spent studying and preparing for this day
            while my peers were out getting drunk, wasting their time and
            jeopardizing their futures. The day my acceptance to Seoul
            University came I was thrilled, I expected it but that didn’t take
            any of the excitement away. My mother cried for what felt like
            hours, and I have to admit I was pretty proud of myself. All my
            hardwork finalkly paid off. I had once considered leaving Seoul for
            college but eventually decided against it. I like familiarity and
            routines just like my mother. The hot water loosens my strained
            muscles , how long have I been in here? I hurry and wash my hair and
            bosy, lazily running a rzaor over my legs and remoive the small
            stubble that has appeared over the weekend. As I wrap the towel
            around my wet body, my motehr calls my name again. I ignore her, I
            know she is nervous for my arrival day at college but I have had
            this day planned down to the hour, for months. “Jung Hyung!!!!” “I
            am coming down now, please don’t call my name again!” I yell as I
            walk down the stairs. My bestfriend, Soo Hon is sitting at the table
            across from my mother, dressed in blue polo shirt and khakis, hos
            normal attire. His blonde hair is combed and lightly gelled to
            perfection. “Hel college girl,” He smiles a bright, perfectly lined
            smile while standing to pull my into a tight hug “Hey,” I give him
            an equally bright smile and pull my dirty blonde hair into a bun
            once he realeases me from his grip “Honey, we can wait a couple
            minutes while you fix your hair” My mom says quietly, running
            disapproving eyes over me I make my way to the mirros in the hallway
            and nod, she is right. My hair needs to be presentable for today,
            and ofcourse she did not hesistate to remind me. She never does. “I
            will put your bags in the car” Soo Hon offers and picks up the key
            from my table. “Here we are!” My mother squels as we drive through
            the stone age and into the campus. The campus looks just great in
            person as it did in the brochures and online, I’m impressed.
            The buildings are old and elegant. Hundreds of people, parents
            hugging and kissing their children goodbye, clusters of freshmen,
            dressed head to toe in Seoul University gear, and a few straggles,
            lost and confused, fill the area. The size of the campus is
            intimidating but hopefully after a few weeks I will feel at home.
            The orientation is short and I sit alone, my usual forte. Seemingly
            nice middle aged woman gives me my down key and sends me on my way.
            I already feel more freedom than I have in the last eighteen years.
            "I want to see your dorm room before I go honey. I just can't
            believe you are in college! My only daughter, a college student, is
            living on her own. I just can't believe it." She whines and wipes
            her tears, careful to not mess up her makeup.  Soo Ho follows us,
            carrying my bags as we navigate through the corridor. "Now just be
            sure you remember everything I told you, you don't want to do
            anything to ruin your future," she checks the time on her watch, a
            watch that she certainly couldn't afford but purchased anyway. "It's
            B22... we are in C ha''," I tell them. Luckily, I see large B
            painted on the wall.  "Down here," I instruct and th ey follow. I'm
            thankful that I only brought a few clothes, a blanket, and some of
            my favorite books with me, giving Soo Ho less to carry.  They made
            snide comments like “She’ll need plastic surgery,” or “She must’ve
            been adopted.” Amidst the laughter, Mom had whispered that she just
            needs to do well in school. While she once dreamed of transforming
            into a beautiful fairy like the cartoons on TV, the neighborhood
            kids ridiculed her for it. She then decided that characters from
            horror manhwas were far more relatable, for she believed that she
            was born with a cursed face. Now in high school, our heroine IM
            JOO-KYUNG (Moon Ga-young) is one of two girls in class who don’t
            spend their free time applying makeup or fixing their hair.
            Joo-kyung opts to read her manhwa and listen to heavy metal music
            instead, offering to share with her fellow classmate Hye-min, who
            declines. The catty leader of the popular kids, Se-mi, notices
            Joo-kyung jamming out alone. Joo-kyung doesn’t notice them calling
            out, “Hey, Dumpling!” until one of Se-mi’s underlings aims a paper
            ball at her head. Joo-kyung immediately leaves to buy them dumplings
            as their Shuttle. She gets indignant when she hears her classmates
            mocking her for being the errand girl and storms bacak inside.
            However, all she can do is confirm their orders with a goofy smile.
            On her way back from the store, Joo-kyung peers inside the cafeteria
            to catch a glimpse of the handsome cafeteria oppa, HYUN-BIN (cameo
            by Lee Tae-ri). He was out running an errand and stops in front of
            Joo-kyung to say hello, taking one of her earbuds to pop into his
            own ear. “Pfft, is that you, Mi-chae?” Hyun-bin recognizes the band
            and tells her that they have the same taste in music. He begins to
            headbang and dance along while Joo-kyung’s heart threatens to pound
            out of her chest. Mesmerized by his looks, Joo-kyung tries to calm
            herself until she shocks Hyun-bin by accidentally yelling out loud,
            “Calm down, already!” The popular kids wonder where their dumplings
            are and see Joo-kyung and Hyun-bin from their classroom window. One
            of Se-mi’s lackeys notes that Hyun-bin hits on Se-mi all the time.
            During lunch, Joo-kyung lines up and gushes about Hyun-bin,
            receiving unenthusiastic responses from Hye-min. Her excitement
            while wondering if he reciprocates her feelings catches the
            attention of other students. Joo-kyung remains oblivious as others
            begin to make fun of her, but Hye-min hears them and excuses herself
            to avoid the attention. Hyun-bin agrees to meet with Joo-kyung
            during lunch tomorrow, and Se-mi can’t believe that her errand girl
            is actually shooting her shot. That night, Joo-kyung works hard in
            the kitchen baking cookies instead of studying, earning her an
            earful from her mother. We get a glimpse into Joo-kyung’s world –
            her room is decked out with skeletal figurines and the shelves are
            overflowing with horror books. Joo-kyung prepared a set of metal
            concert tickets and re-reads her confession letter: “You’re a fool
            who doesn’t know how I feel, and I’m a fool who only has eyes for
            you.” She giddily acts out a scenario whereby Hyun-bin accepts her
            love, and she puckers up for a smooch with her doll. Joo-kyung’s
            brother IM JOO-YOUNG (Kim Min-ki) storms into her room at this
            moment to complain about her loud music, and leaves after saying
            he’d rather go blind than to witness that again. On confession day,
            Joo-kyung posts about her nervousness on a forum and others comment
            words of encouragement. She gets on her bus and there’s a stark
            difference between how she and Se-mi are treated by the crowd of
            students. Joo-kyung gets pushed around roughly, but everyone clears
            the way for Se-mi while whispering about her beauty. At school,
            Joo-kyung sets her gift on the desk before quickly heading off on a
            dumpling run. The bullies rummage through the box, callously tossing
            around the cookies and making fun of her for putting so much effort
            into the confession. Mean girl Se-mi decides to speak to Hyun-bin,
            pouting that she was sooo upset to hear rumors that he was dating
            Joo-kyung. The smitten cafeteria worker blames himself for making
            her feel that way, and she lets him believe that he has a chance
            with her. Mom runs a salon and is quite close with her customers.
            When she explains that her husband isn’t around and is busy on the
            phone these days, they worry that he’s out having an affair. Mom
            would be okay with that as long as he’s not in trouble financially.
            As if on cue, two thuggish men enter the salon looking for Im
            Jae-pil’s wife. At school, Joo-kyung hands her gift to Hyun-bin,
            who’s noticeably less kind after talking to Se-mi. Someone films the
            confession from nearby, catching the rejection. Hyun-bin’s offended
            that Joo-kyung thinks that he would actually date her. He crushes
            her soul and says he was being nice because she was an outcast. “If
            you don’t have the looks, at least have smarts,” he criticizes,
            knocking her gift to the ground. Before stalking away, he tells her
            to look in the mirror with her spare time instead. Rubbing salt into
            her wound, the entire bully squad pops out and rejoices at her
            misery with Hye-min in tow, uncomfortably filming the entire
            interaction. Se-mi narrates to the audience that they just witnessed
            the ugliest girl in school asking someone out. Joo-kyung lightly
            pushes Se-mi away and asks her to stop, and the sole guy of the
            group pushes her to the ground for “hitting” the leader. He proceeds
            to dump the entire box of cookies over her head. “Why do you guys
            hate me so much?” Joo-kyung sobs that she never did anything to
            them. Se-mi jabs her forehead and replies that it’s because she’s
            ugly. Joo-kyung makes a run for it and on her way home, sees that
            the video has been uploaded to social media. Her classmates leave
            comments that she’s ugly and has bad taste. Heartbroken and
            humiliated, Joo-kyung sobs openly on the street. She pops into the
            nearest building to freshen up, then takes a good look at herself in
            the mirror. Joo-kyung tosses her glasses in frustration, remembering
            the mean comments about her looks. She cries that she can’t possibly
            return to school since nobody likes her. Poor girl. Joo-kyung ends
            up standing on the roof of the high-rise building, looking out at
            the cityscape for hours. She’s prepared to jump when suddenly, a
            billboard in the distance catches her eye. It’s a message to
            commemorate former idol JUNG SE-YEON (cameo by SF9’s Chani), as it
            would’ve been his birthday had he not passed away. She finds it
            tragic that he would’ve turned 18 today, then realizes that she
            doesn’t want to die after all. Just as she comes to this conclusion,
            a boy runs to her and pulls her off the ledge, causing her glasses
            to fly off as she tumbles on top of him. The boy, LEE SOO-HO (Cha
            Eun-woo), is relieved. He lectures her, wondering what she could
            possibly be going through that led her to wanting to die. He barks
            that her loved ones would be devastated and it seems personal when
            he claims that they could live in guilt for not being able to save
            her. Soo-ho gruffly tells her not to die and heads back inside.
            Joo-kyung can’t see anything because she lost her glasses, following
            him down the stairs blindly because the elevator is out of service.
            She hangs on to the railings for dear life and wails, “Ajusshi, wait
            for me!” Pfft, without her vision, she can’t tell that he’s just a
            teen. He speeds on ahead until he hears her fall, then reluctantly
            offers to help her up (she accidentally grabs his butt, lol). Soo-ho
            ends up piggybacking Joo-kyung down the stairs, and our bumbling
            heroine attempts to make conversation. She figures that his angry
            reaction to seeing her on the roof is because he knew someone who
            had the same thoughts as her and passed away. “Jung Hyung!!!” I hear
            my mom’s voice call from downstairs. I groan to myself and roll out
            of my tiny, yet comfortable bed. While neatly tucking the corners of
            my bed sheet into the ehadboard, It take my time because this is the
            last morning that I will be competing the task for months. “Jung
            Hyung!!!” She calls again. “I’m up!” I yell back. The cabinets open
            and close downstairs, the sounds of her frantically preparing
            breakfast. The knot in my stomach grows with each step to the
            bathroom, by the time I start the shower, it’s nearly unbearable. I
            spent the last few years nervously anticipating college. My weekends
            were spent studying and preparing for this day while my peers were
            out getting drunk, wasting their time and jeopardizing their
            futures. The day my acceptance to Seoul University came I was
            thrilled, I expected it but that didn’t take any of the excitement
            away. My mother cried for what felt like hours, and I have to admit
            I was pretty proud of myself. All my hardwork finalkly paid off. I
            had once considered leaving Seoul for college but eventually decided
            against it. I like familiarity and routines just like my mother. The
            hot water loosens my strained muscles , how long have I been in
            here? I hurry and wash my hair and bosy, lazily running a rzaor over
            my legs and remoive the small stubble that has appeared over the
            weekend. As I wrap the towel around my wet body, my motehr calls my
            name again. I ignore her, I know she is nervous for my arrival day
            at college but I have had this day planned down to the hour, for
            months. “Jung Hyung!!!!” “I am coming down now, please don’t call my
            name again!” I yell as I walk down the stairs. My bestfriend, Soo
            Hon is sitting at the table across from my mother, dressed in blue
            polo shirt and khakis, hos normal attire. His blonde hair is combed
            and lightly gelled to perfection. “Hel college girl,” He smiles a
            bright, perfectly lined smile while standing to pull my into a tight
            hug “Hey,” I give him an equally bright smile and pull my dirty
            blonde hair into a bun once he realeases me from his grip “Honey, we
            can wait a couple minutes while you fix your hair” My mom says
            quietly, running disapproving eyes over me I make my way to the
            mirros in the hallway and nod, she is right. My hair needs to be
            presentable for today, and ofcourse she did not hesistate to remind
            me. She never does. “I will put your bags in the car” Soo Hon offers
            and picks up the key from my table. “Here we are!” My mother squels
            as we drive through the stone age and into the campus. The campus
            looks just great in person as it did in the brochures and online,
            I’m impressed. The buildings are old and elegant. Hundreds of
            people, parents hugging and kissing their children goodbye, clusters
            of freshmen, dressed head to toe in Seoul University gear, and a few
            straggles, lost and confused, fill the area. The size of the campus
            is intimidating but hopefully after a few weeks I will feel at home.
            The orientation is short and I sit alone, my usual forte. Seemingly
            nice middle aged woman gives me my down key and sends me on my way.
            I already feel more freedom than I have in the last eighteen years.
            "I want to see your dorm room before I go honey. I just can't
            believe you are in college! My only daughter, a college student, is
            living on her own. I just can't believe it." She whines and wipes
            her tears, careful to not mess up her makeup.  Soo Ho follows us,
            carrying my bags as we navigate through the corridor. "Now just be
            sure you remember everything I told you, you don't want to do
            anything to ruin your future," she checks the time on her watch, a
            watch that she certainly couldn't afford but purchased anyway. "It's
            B22... we are in C ha''," I tell them. Luckily, I see large B
            painted on the wall.  "Down here," I instruct and th ey follow. I'm
            thankful that I only brought a few clothes, a blanket, and some of
            my favorite books with me, giving Soo Ho less to carry.  They made
            snide comments like “She’ll need plastic surgery,” or “She must’ve
            been adopted.” Amidst the laughter, Mom had whispered that she just
            needs to do well in school. While she once dreamed of transforming
            into a beautiful fairy like the cartoons on TV, the neighborhood
            kids ridiculed her for it. She then decided that characters from
            horror manhwas were far more relatable, for she believed that she
            was born with a cursed face. Now in high school, our heroine IM
            JOO-KYUNG (Moon Ga-young) is one of two girls in class who don’t
            spend their free time applying makeup or fixing their hair.
            Joo-kyung opts to read her manhwa and listen to heavy metal music
            instead, offering to share with her fellow classmate Hye-min, who
            declines. The catty leader of the popular kids, Se-mi, notices
            Joo-kyung jamming out alone. Joo-kyung doesn’t notice them calling
            out, “Hey, Dumpling!” until one of Se-mi’s underlings aims a paper
            ball at her head. Joo-kyung immediately leaves to buy them dumplings
            as their Shuttle. She gets indignant when she hears her classmates
            mocking her for being the errand girl and storms bacak inside.
            However, all she can do is confirm their orders with a goofy smile.
            On her way back from the store, Joo-kyung peers inside the cafeteria
            to catch a glimpse of the handsome cafeteria oppa, HYUN-BIN (cameo
            by Lee Tae-ri). He was out running an errand and stops in front of
            Joo-kyung to say hello, taking one of her earbuds to pop into his
            own ear. “Pfft, is that you, Mi-chae?” Hyun-bin recognizes the band
            and tells her that they have the same taste in music. He begins to
            headbang and dance along while Joo-kyung’s heart threatens to pound
            out of her chest. Mesmerized by his looks, Joo-kyung tries to calm
            herself until she shocks Hyun-bin by accidentally yelling out loud,
            “Calm down, already!” The popular kids wonder where their dumplings
            are and see Joo-kyung and Hyun-bin from their classroom window. One
            of Se-mi’s lackeys notes that Hyun-bin hits on Se-mi all the time.
            During lunch, Joo-kyung lines up and gushes about Hyun-bin,
            receiving unenthusiastic responses from Hye-min. Her excitement
            while wondering if he reciprocates her feelings catches the
            attention of other students. Joo-kyung remains oblivious as others
            begin to make fun of her, but Hye-min hears them and excuses herself
            to avoid the attention. Hyun-bin agrees to meet with Joo-kyung
            during lunch tomorrow, and Se-mi can’t believe that her errand girl
            is actually shooting her shot. That night, Joo-kyung works hard in
            the kitchen baking cookies instead of studying, earning her an
            earful from her mother. We get a glimpse into Joo-kyung’s world –
            her room is decked out with skeletal figurines and the shelves are
            overflowing with horror books. Joo-kyung prepared a set of metal
            concert tickets and re-reads her confession letter: “You’re a fool
            who doesn’t know how I feel, and I’m a fool who only has eyes for
            you.” She giddily acts out a scenario whereby Hyun-bin accepts her
            love, and she puckers up for a smooch with her doll. Joo-kyung’s
            brother IM JOO-YOUNG (Kim Min-ki) storms into her room at this
            moment to complain about her loud music, and leaves after saying
            he’d rather go blind than to witness that again. On confession day,
            Joo-kyung posts about her nervousness on a forum and others comment
            words of encouragement. She gets on her bus and there’s a stark
            difference between how she and Se-mi are treated by the crowd of
            students. Joo-kyung gets pushed around roughly, but everyone clears
            the way for Se-mi while whispering about her beauty. At school,
            Joo-kyung sets her gift on the desk before quickly heading off on a
            dumpling run. The bullies rummage through the box, callously tossing
            around the cookies and making fun of her for putting so much effort
            into the confession. Mean girl Se-mi decides to speak to Hyun-bin,
            pouting that she was sooo upset to hear rumors that he was dating
            Joo-kyung. The smitten cafeteria worker blames himself for making
            her feel that way, and she lets him believe that he has a chance
            with her. Mom runs a salon and is quite close with her customers.
            When she explains that her husband isn’t around and is busy on the
            phone these days, they worry that he’s out having an affair. Mom
            would be okay with that as long as he’s not in trouble financially.
            As if on cue, two thuggish men enter the salon looking for Im
            Jae-pil’s wife. At school, Joo-kyung hands her gift to Hyun-bin,
            who’s noticeably less kind after talking to Se-mi. Someone films the
            confession from nearby, catching the rejection. Hyun-bin’s offended
            that Joo-kyung thinks that he would actually date her. He crushes
            her soul and says he was being nice because she was an outcast. “If
            you don’t have the looks, at least have smarts,” he criticizes,
            knocking her gift to the ground. Before stalking away, he tells her
            to look in the mirror with her spare time instead. Rubbing salt into
            her wound, the entire bully squad pops out and rejoices at her
            misery with Hye-min in tow, uncomfortably filming the entire
            interaction. Se-mi narrates to the audience that they just witnessed
            the ugliest girl in school asking someone out. Joo-kyung lightly
            pushes Se-mi away and asks her to stop, and the sole guy of the
            group pushes her to the ground for “hitting” the leader. He proceeds
            to dump the entire box of cookies over her head. “Why do you guys
            hate me so much?” Joo-kyung sobs that she never did anything to
            them. Se-mi jabs her forehead and replies that it’s because she’s
            ugly. Joo-kyung makes a run for it and on her way home, sees that
            the video has been uploaded to social media. Her classmates leave
            comments that she’s ugly and has bad taste. Heartbroken and
            humiliated, Joo-kyung sobs openly on the street. She pops into the
            nearest building to freshen up, then takes a good look at herself in
            the mirror. Joo-kyung tosses her glasses in frustration, remembering
            the mean comments about her looks. She cries that she can’t possibly
            return to school since nobody likes her. Poor girl. Joo-kyung ends
            up standing on the roof of the high-rise building, looking out at
            the cityscape for hours. She’s prepared to jump when suddenly, a
            billboard in the distance catches her eye. It’s a message to
            commemorate former idol JUNG SE-YEON (cameo by SF9’s Chani), as it
            would’ve been his birthday had he not passed away. She finds it
            tragic that he would’ve turned 18 today, then realizes that she
            doesn’t want to die after all. Just as she comes to this conclusion,
            a boy runs to her and pulls her off the ledge, causing her glasses
            to fly off as she tumbles on top of him. The boy, LEE SOO-HO (Cha
            Eun-woo), is relieved. He lectures her, wondering what she could
            possibly be going through that led her to wanting to die. He barks
            that her loved ones would be devastated and it seems personal when
            he claims that they could live in guilt for not being able to save
            her. Soo-ho gruffly tells her not to die and heads back inside.
            Joo-kyung can’t see anything because she lost her glasses, following
            him down the stairs blindly because the elevator is out of service.
            She hangs on to the railings for dear life and wails, “Ajusshi, wait
            for me!” Pfft, without her vision, she can’t tell that he’s just a
            teen. He speeds on ahead until he hears her fall, then reluctantly
            offers to help her up (she accidentally grabs his butt, lol). Soo-ho
            ends up piggybacking Joo-kyung down the stairs, and our bumbling
            heroine attempts to make conversation. She figures that his angry
            reaction to seeing her on the roof is because he knew someone who
            had the same thoughts as her and passed away.
          </Text>
        </ScrollView>
      </View>
      <View
        style={{
          height: 45,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Feather name="list" size={25} />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
            <AntDesign name="message1" size={25} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
            <Ionicons name={darkMode ? 'moon' : 'moon-outline'} size={25} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Feather name="upload" size={25} />
        </View>
      </View>
    </View>
  )
}

const CustomSlider = ({ onChange, icon, value }) => {
  const val = 100
  const [width, setWidth] = useState((value - 0.5) * val)
  return (
    <View
      style={{
        height: 30,
        width: '100%',
        backgroundColor: 'grey',
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: 32,
            height: '100%',
            backgroundColor: '#FF92CD',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            paddingHorizontal: 5,
          }}
        >
          {icon}
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: '100%',
              width: width + '%',
              backgroundColor: '#FF92CD',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          ></View>
        </View>
      </View>

      <Slider
        minimumValue={0.5}
        maximumValue={1.5}
        onValueChange={(v) => {
          setWidth((value - 0.5) * val)
          if (onChange) onChange(v)
        }}
        value={width / val + 0.5}
        thumbTintColor={'transparent'}
        maximumTrackTintColor="transparent"
        minimumTrackTintColor="transparent"
        style={{ height: '100%', position: 'absolute', width: '100%' }}
      />
    </View>
  )
}

export default BookRead
