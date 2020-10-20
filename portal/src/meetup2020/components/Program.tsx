import React from "react";
import "./style.scss";

const Program = () => {
    return (
        <div className="row jkl-layout-spacing--xl-top">
            <article className="meetup-program">
                <h2 className="jkl-title-small jkl-component-spacing--large-bottom">Date & Time</h2>
                <h3 className="jkl-body">
                    November 4th, 2020,
                    <br />
                    1.00 pm (UK), 2.00 pm (Oslo), 10.00 pm (Sidney)
                </h3>
                <table className="meetup-program__table jkl-table jkl-layout-spacing--large-top">
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
