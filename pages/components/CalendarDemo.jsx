import React, { Component } from "react";
import { Calendar } from "../../@/components/ui/calendar";

class CalendarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date().toLocaleDateString()
    };
  }

  render() {
    return (
      <div>
        <Calendar
          mode="single"
          selected={this.state.currentDate}
          onSelect={date => this.setState({ currentDate: date })}
          className="rounded-md border"
        />

        
      </div>
    );
  }
}

export const getStaticProps = async () => {
  return {
    props: {}, // Return an empty object since there's no dynamic data
    revalidate: 3600 // Add revalidation time if needed
  };
};

export default CalendarDemo;
