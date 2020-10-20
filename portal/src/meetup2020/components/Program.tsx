import React from "react";
import "./style.scss";

const Program = () => {
    return (
        <div className="row row--topmargin">
            <article className="meetup-program">
                <h1>Date & Time</h1>
                <h2>4th of November, 2020, Time: 1.00pm UK, 2.00pm Oslo, 10.00pm Sidney</h2>
                <table className="jkl-table helloworld">
                    <thead>
                        <tr className="jkl-table__row">
                            <th className="jkl-table__heading">Time</th>
                            <th className="jkl-table__heading">About</th>
                            <th className="jkl-table__heading">Speaker</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="jkl-table__row">
                            <td className="jkl-table__data-cell">2.00pm</td>
                            <td className="jkl-table__data-cell">Opening talk</td>
                            <td className="jkl-table__data-cell">Eduardo Ibacache Rodriguez</td>
                        </tr>
                        <tr className="jkl-table__row">
                            <td className="jkl-table__data-cell">2.10pm</td>
                            <td className="jkl-table__data-cell">Jøkul Design System story</td>
                            <td className="jkl-table__data-cell">Glenn Brownlee & others</td>
                        </tr>
                        <tr className="jkl-table__row">
                            <td className="jkl-table__data-cell">2.50pm</td>
                            <td className="jkl-table__data-cell">Vision and Strategy</td>
                            <td className="jkl-table__data-cell">Morgane Peng</td>
                        </tr>
                        <tr className="jkl-table__row">
                            <td className="jkl-table__data-cell">3.30pm</td>
                            <td className="jkl-table__data-cell">Design System story</td>
                            <td className="jkl-table__data-cell">Mike Hall</td>
                        </tr>
                        <tr className="jkl-table__row">
                            <td className="jkl-table__data-cell">4.10pm</td>
                            <td className="jkl-table__data-cell">Break</td>
                            <td className="jkl-table__data-cell"></td>
                        </tr>
                        <tr className="jkl-table__row">
                            <td className="jkl-table__data-cell">4.20pm</td>
                            <td className="jkl-table__data-cell">Paneldebate</td>
                            <td className="jkl-table__data-cell">Everyone</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </div>
    );
};

export default Program;
