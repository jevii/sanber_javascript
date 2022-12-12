import { check, group } from "k6";
import http from "k6/http"

export default function() {
    group('K6 Get Test', () => {
        let response1 = http.get('https://reqres.in');
        check( response1, {
            'is status 200': (r) => r.status ==200
        })
    })
}