// For Mission List
export interface MissionData {
    mission_name: string;
    launch_year: string;
    details: string;
    flight_number: string;
    links: {
        mission_patch_small: string;
    };
}

// For Mission details
export interface MissionDetail {
    flight_number: string;
    mission_name: string;
    launch_year: string;
    details: string;
    links: {
        mission_patch_small: string;
    };
    rocket: {
        rocket_name: string;
        rocket_type: string;
    };
    launch_site: {
        site_name_long: string;
    };
}