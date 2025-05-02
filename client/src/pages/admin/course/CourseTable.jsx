import { Button } from "@/components/ui/button";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { useGetCreatorCourseQuery } from "@/features/api/courseApi";
import { Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CourseTable = () => {
  const { data, isLoading } = useGetCreatorCourseQuery();

  const navigate = useNavigate();

  if (isLoading) return <h1>Loading...</h1>;
  console.log("data -> ", data);

  return (
    <div className="w-full dark:bg-gray-800">
      <Button onClick={() => navigate("create")} className="mb-4">
        Create a new course
      </Button>

      <div>
        <Table className="w-full table-auto">
          <TableCaption>A list of your recent courses.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead >Price</TableHead>
              <TableHead className="px-20">Status</TableHead>
              <TableHead className="px-30">Title</TableHead>
              <TableHead className="px-50 text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.courses.map((course) => (
              <TableRow key={course._id}>
                <TableCell >
                  {course?.coursePrice || "NA"}
                </TableCell>
                <TableCell className="px-20">
                  <Badge>{course.isPublished ? "Published" : "Draft"}</Badge>
                </TableCell>
                <TableCell className="px-30">{course.courseTitle}</TableCell>
                <TableCell className="px-50 text-right">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => navigate(`${course._id}`)}
                  >
                    <Edit />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CourseTable;
