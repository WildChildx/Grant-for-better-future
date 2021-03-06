import { Component } from "react";
import PendingDonation from "./PendingDonation";
import { BackendURI } from "../config";

export default class PendingDonationsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
    };
  }
  componentDidMount() {
    fetch(
      `${BackendURI}/donations/PENDING?userId=${JSON.stringify(
        sessionStorage.getItem("userId")
      )}`
    )
      .then((r) => r.json())
      .then((donations) => this.setState(donations));
  }

  render() {
    return (
      <div
        id="PendingDonations"
        className="container overflowX-hidden position-relative"
      >
        {this.state.donations.map((donation, index) => (
          <PendingDonation
            key={index}
            id={donation.donationId}
            inventory={donation.inventory}
            description={donation.description}
            images={donation.images}
          />
        ))}
      </div>
    );
  }
}
