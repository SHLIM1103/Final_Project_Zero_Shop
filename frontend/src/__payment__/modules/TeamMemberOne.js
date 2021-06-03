import React from "react"
import SectionTitleTwo from "./SectionTitleTwo"
import teamMemberData from "./team-member-one.json"
import TeamMemberOneSingle from "./TeamMemberOneSingle"

const TeamMemberOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`team-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        {/* section title */}
        <SectionTitleTwo
          titleText="주문이 완료되었습니다"
          subTitleText="zero-shop을 이용해주셔서 감사합니다."
          positionClass="text-center"
          spaceClass="mb-60"
        />

        <div className="row">
          {teamMemberData &&
            teamMemberData.map((single, key) => {
              return <TeamMemberOneSingle data={single} spaceBottomClass="mb-30" key={key} />
            })}
        </div>
      </div>
    </div>
  )
}

export default TeamMemberOne
