// import axios from "axios";
// const host = "https://system.ezypost.com.my/admin/";
// const host = "http://homiest.cysoft.co/admin/"
const host = "https://homiestliving.com/admin/"
const access_endpoint_link = host + "API/";

const format_request = (postparam) => {
    //   if (postparam) {
    //     let token = window.localStorage.getItem("token");
    //     if (token) {
    //       postparam["token"] = token;
    //     }
    //   }
    let body = "";
    for (let k in postparam) {
        body += encodeURI(k) + "=" + encodeURI(postparam[k]) + "&";
    }
    var postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
    };
    return postOptions;
};

const api_post = async (postparam = {}, end_point) => {
    var response = await fetch(
        access_endpoint_link + end_point,
        format_request(postparam)
    );

    var json = await response.json();
    if (json.status) {
        return json;
    } else {
        // if (json.message == "Please login again") {
        //     window.localStorage.clear();
        //     //alert(json.message);
        //     window.location.href = "/login";
        //     return json;
        // } else {
        //     //   alert(json.message);
        // }
        return json;
    }
}

export const formatNewJson = (filter, origininalState) => {
    filter.map((row, index) => (
        delete origininalState[row]
    ));
    return origininalState;
}

export const get_banner = async (postparam) => {
    return api_post(postparam, 'get_banner');
};

export const get_about_us = async (postparam) => {
    return api_post(postparam, 'get_about_us');
};

export const get_contact = async (postparam) => {
    return api_post(postparam, 'get_contact');
};

export const get_in_touch = async (postparam) => {
    return api_post(postparam, 'get_in_touch');
};

export const subscribe = async (postparam) => {
    return api_post(postparam, 'subscribe');
};

export const get_room_type = async (postparam) => {
    return api_post(postparam, 'get_room_type');
};

export const get_homepage_room_type = async (postparam) => {
    return api_post(postparam, 'get_homepage_room_type');
};

export const get_category = async (postparam) => {
    return api_post(postparam, 'get_category');
};

export const get_room_type_category = async (postparam) => {
    return api_post(postparam, 'get_room_type_category');
};

export const get_room_type_product = async (postparam) => {
    return api_post(postparam, 'get_room_type_product');
};

export const get_new_product = async (postparam) => {
    return api_post(postparam, 'get_new_product');
};

export const get_bestselling_product = async (postparam) => {
    return api_post(postparam, 'get_bestselling_product');
};

export const filter_product = async (postparam) => {
    return api_post(postparam, 'filter_product');
};

export const get_product_by_category = async (postparam) => {
    return api_post(postparam, 'get_product_by_category');
};

export const get_product_detail = async (postparam) => {
    return api_post(postparam, 'get_product_detail');
};

// export const get_upload_path = async (postparam) => {
//     let res = await axios.post(access_endpoint_link + "get_upload_path", postparam);
//     if (res) {
//         return res.data;
//     } else {
//         alert(res.message);
//         // return false;
//     }
// };