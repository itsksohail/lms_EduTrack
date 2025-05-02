import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

export const Course = ({ course }) => {
  return (
    <Link to={`course-detail/${course._id}`}>
      <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl tranform hover:scale-105 transition-all duration-300 py-0 mt-0 mr-1 mb-1">
        <div className="relative">
          <img
            src={course.courseThumbnail}
            alt="Bunch of courses"
            className="w-full h-36 object-cover rounded-t-lg block"
          />
        </div>
        <CardContent className="px-5 pb-4 space-y-3">
          <h1 className="hover:underline font-bold text-lg truncate">
            {course.courseTitle}
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex item-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={course?.creator?.photoUrl || "https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-medium text-sm">{course.creator?.name || "Sohail Khan"}</h1>
            </div>
            <Badge
              className={
                "bg-blue-600 text-white px-2 py-1 text-xs rounded-full"
              }
            >
              {course.courseLevel}
            </Badge>
          </div>
          <div>
            <span className="text-lg font-bold">₹{course.coursePrice}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
