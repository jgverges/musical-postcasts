import React from "react";
import mockList from '../models/filterdList.mock.json'
import { type Podcast } from "../models/Podcast";

export default function usePodcasts ():Podcast[]{
return mockList as Podcast[]
}