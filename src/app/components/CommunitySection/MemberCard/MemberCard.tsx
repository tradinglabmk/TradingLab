"use client";

import Image from "next/image";
import { MemberData } from "../data";

interface MemberCardProps {
  member: MemberData;
  onViewResults: () => void;
}

export default function MemberCard({ member, onViewResults }: MemberCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
      {/* Header with profile info */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
          <Image
            src={member.profileImage}
            alt={`${member.name} profile`}
            fill
            className="object-cover scale-110"
          />
        </div>
        <div>
          <h3 className="text-white font-medium text-lg">{member.name}</h3>
          <div className="flex items-center space-x-2">
            <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              Member
            </span>
            <span className="text-gray-400 text-sm">{member.memberSince}</span>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent mb-4" />

      {/* Testimonial text */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4 min-h-[80px]">
        {member.testimonial}
      </p>

      {/* Separator */}
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent mb-4" />

      {/* Profit highlight */}
      <div className="bg-black/30 rounded-lg p-3 border border-green-500/30">
        <p className="text-green-400 font-semibold text-center">{member.profitText}</p>
      </div>

      {/* Action link */}
      <div className="mt-4 text-center">
        <button 
          onClick={onViewResults}
          className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
        >
          Погледни резултати
        </button>
      </div>
    </div>
  );
}