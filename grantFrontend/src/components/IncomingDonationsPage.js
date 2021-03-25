import { Component } from "react";
import IncomingDonation from "./IncomingDonation";
import { BackendURI } from "../config";

export default class IncomingDonationsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
    };
  }
  componentDidMount() {
    fetch(
      `${BackendURI}/donations?instituteID=${JSON.parse(
        sessionStorage.getItem("userId")
      )}`
    )
      .then((r) => r.json())
      .then((donations) => this.setState(donations));
  }

  render() {
    return (
      <div
        id="IncomingDonations"
        className="container overflowX-hidden position-relative"
      >
        {this.state.donations.map((donation, index) => (
          <IncomingDonation
            key={index}
            id={donation.donationId}
            donorName={donation.donorName}
            inventory={donation.inventory}
            description={donation.description}
            distance={donation.distance}
            images={donation.images}
          />
        ))}
      </div>
    );
  }
}
