import { NextResponse } from "next/server";
import courses from '../data.json';

// given a URL this gets the search term after "?query="
// and finds any courses that have that search term
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query")
    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase());
    });
    return NextResponse.json(filteredCourses)
}