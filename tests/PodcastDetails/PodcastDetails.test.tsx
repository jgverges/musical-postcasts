import React from "react";
import { render, screen } from "@testing-library/react";
import PodcastDetails from "../../src/features/PodcastDetails/components/PodcastDetails";
import { usePodcastDetails } from "../../src/features/PodcastDetails/services/usePodcastDetails";
import { BrowserRouter } from "react-router-dom";
import mock from "../__mocks__/Podcast-detail-sm.mock.json";
import { LoadingProvider } from "../../src/common/contexts/LoadingContext";
import {
  extractTitleFromTrack,
  millisecondsToHoursMinutes,
} from "../../src/common/utils/FormattingHelpers";

const mockEpisodes = mock.results.filter((detail) => "episodeUrl" in detail);

jest.mock(
  "../../src/features/PodcastDetails/services/usePodcastDetails",
  () => ({
    __esModule: true,
    usePodcastDetails: jest.fn(),
  })
);

describe("PodcastDetails Component", () => {
  beforeEach(() => {
    (usePodcastDetails as jest.Mock).mockReturnValue({
      results: mockEpisodes,
      error: null,
    });
    render(
      <BrowserRouter>
        <LoadingProvider>
          <PodcastDetails />
        </LoadingProvider>
      </BrowserRouter>
    );
  });

  test("renders list of podcast episodes with 'trackName' and 'trackTimeMillis' properly", () => {
    const trackName = extractTitleFromTrack(mockEpisodes[0].trackName); // Ish Type Beat
    const trackTimeMillis = millisecondsToHoursMinutes(
      mockEpisodes[1].trackTimeMillis
    ); // 03:10

    const regexTrackName = new RegExp(trackName.replace(/\s+/g, "\\s*"), "i");
    const regexTime = new RegExp(trackTimeMillis.replace(/\s+/g, "\\s*"), "i");

    expect(screen.getByText(regexTrackName)).toBeDefined();
    expect(screen.queryByText(/Ishhh Type Beat/i)).toBeNull(); //With misspelled text 'Ishhh' instead 'Ish'
    expect(screen.getByText(regexTime)).toBeDefined();
  });
});
