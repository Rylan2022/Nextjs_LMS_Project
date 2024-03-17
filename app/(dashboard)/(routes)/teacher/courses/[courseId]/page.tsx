import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db"
import { redirect } from "next/dist/server/api-utils";

const CourseIdPage = async({
    params
}: {
    params: { courseId: String }
    
}) => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const course = await db.course.findUnique({
        where: {
            id: params.courseId
        }
    });

    if (!course) {
        return redirect("/");
    }

     

    const requiredFields = [
        course.title,
        course.description,
        course.imageUrl,
        course.price,
        course.categoryId
    ];





    return ( 
        <div>
           Course Id: {params.courseId}
        </div>
     );
}
 
export default CourseIdPage;