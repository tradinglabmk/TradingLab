"use client";

import { useState } from "react";
import { members, MemberData } from "./data";
import MemberCard from "./MemberCard/MemberCard";
import TestimonialModal from "./TestimonialModal/TestimonialModal";
import { ScrollAnimationWrapper } from "../ScrollAnimationWrapper/ScrollAnimationWrapper";

export default function CommunitySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);

  const handleViewResults = (member: MemberData) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <section className="w-full bg-[#0F0F14] py-16 px-4 lg:px-8" id="community-experiences">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollAnimationWrapper animationType="fadeInUp" delay={0} duration={0.6}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-white mb-4">
                Искуства од заедницата
              </h2>
              <p className="text-gray-400 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
                Нашите членови го споделуваат своето патување од почетници до профитабилни трејдери. 
                Погледнете ги нивните искуства и реалните разговори со нашиот тим.
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Member Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <ScrollAnimationWrapper 
                key={member.id}
                animationType="fadeInUp" 
                delay={index * 150} 
                duration={0.6}
              >
                <MemberCard
                  member={member}
                  onViewResults={() => handleViewResults(member)}
                />
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      <TestimonialModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        member={selectedMember}
      />
    </>
  );
}