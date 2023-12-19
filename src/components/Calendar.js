import {LocaleConfig} from 'react-native-calendars';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {View} from 'react-native';
import {hp} from '../helper/helper';
import {colors} from '../helper';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun.', 'Mon', 'Tue.', 'Wed.', 'The.', 'Fri.', 'Sat.'],
  today: "today's",
};

LocaleConfig.defaultLocale = 'fr';

const CalendarView = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={{marginTop: hp(45)}}>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
        theme={{
          backgroundColor: colors.white,
          calendarBackground: colors.white,
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: colors.pink,
          selectedDayTextColor: colors.white,
          todayTextColor: colors.lightblue,
          dayTextColor: '#2d4150',
          //   textDisabledColor: colors.pink,
        }}
      />
    </View>
  );
};

export default CalendarView;
